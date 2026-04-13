"use client";

import { useMemo } from "react";
import { propsToDataAttrs } from "@/lib/utilities";
import { getOnToken } from "@/lib/colorUtils";
import { IconName } from "lucide-react/dynamic";
import "@/components/button/button.css";
import StateLayer from "@/components/state-layer";
import { LkStateLayerProps } from "@/components/state-layer";
import Icon from "@/components/icon";

/**
 * ButtonのProps定義
 */
export interface LkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** ボタンの表示テキスト */
  label?: string;

  /** 見た目の種類 */
  variant?: "fill" | "outline" | "text" | "primary" | "ghost" | "danger";

  /** カラーテーマ */
  color?: LkColorWithOnToken;

  /** サイズ */
  size?: "sm" | "md" | "lg";

  /** マテリアル指定（LiftKit内部用） */
  material?: string;

  /** 左側アイコン */
  startIcon?: IconName;

  /** 右側アイコン */
  endIcon?: IconName;

  /** アイコンの光学位置補正 */
  opticIconShift?: boolean;

  /** 追加クラス */
  modifiers?: string;

  /** StateLayer上書き設定 */
  stateLayerOverride?: LkStateLayerProps;
}

/**
 * LiftKit Button コンポーネント
 */
export default function Button({
  label = "Button", // デフォルトラベル
  variant = "fill", // デフォルトは塗りつぶし
  color = "primary", // デフォルトカラー
  size = "md", // デフォルトサイズ
  startIcon,
  endIcon,
  opticIconShift = true,
  modifiers,
  stateLayerOverride,
  ...restProps
}: LkButtonProps) {
  /**
   * variant, color などを data属性に変換
   * LiftKitのスタイル制御用
   */
  const lkButtonAttrs = useMemo(
    () =>
      propsToDataAttrs(
        { variant, color, size, startIcon, endIcon, opticIconShift },
        "button",
      ),
    [variant, color, size, startIcon, endIcon, opticIconShift],
  );

  /**
   * 背景色に対する適切な文字色を取得
   * 例: bg-primary → color-on-primary
   */
  const onColorToken = getOnToken(color) as LkColor;

  /**
   * variantごとの基本クラスを決定
   */
  let baseButtonClasses = "";

  switch (variant) {
    case "fill":
      // 塗りつぶしボタン
      baseButtonClasses = `bg-${color} color-${onColorToken}`;
      break;

    case "outline":
    case "text":
      // 枠線 or テキストボタン
      baseButtonClasses = `color-${color}`;
      break;

    case "ghost":
      // ゴーストボタン（背景なし）
      baseButtonClasses = `color-${color}`;
      break;

    case "danger":
      // 危険系（赤）
      baseButtonClasses = `bg-danger color-on-danger`;
      break;

    default:
      baseButtonClasses = `bg-${color} color-${onColorToken}`;
      break;
  }

  /**
   * modifiers（追加クラス）がある場合は結合
   */
  if (modifiers) {
    baseButtonClasses += ` ${modifiers}`;
  }

  /**
   * StateLayerの設定
   * hoverやpress時のエフェクト色
   */
  function getLocalStateLayerProps() {
    if (stateLayerOverride) {
      return stateLayerOverride;
    } else {
      return {
        bgColor: variant === "fill" ? onColorToken : color,
      };
    }
  }

  const localStateLayerProps: LkStateLayerProps = getLocalStateLayerProps();

  return (
    <button
      {...lkButtonAttrs}
      {...restProps}
      type="button"
      data-lk-component="button"
      className={`${baseButtonClasses} ${modifiers || ""}`}
    >
      {/* ボタン内部ラッパー */}
      <div data-lk-button-content-wrap="true">
        {/* 左アイコン */}
        {startIcon && (
          <div data-lk-icon-position="start">
            <Icon
              name={startIcon}
              color={variant === "fill" ? onColorToken : color}
            />
          </div>
        )}

        {/* ボタンテキスト */}
        <span data-lk-button-child="button-text">{label ?? "button"}</span>

        {/* 右アイコン */}
        {endIcon && (
          <div data-lk-icon-position="end">
            <Icon
              name={endIcon}
              color={variant === "fill" ? onColorToken : color}
            />
          </div>
        )}
      </div>

      {/* ホバー・押下時の視覚効果レイヤー */}
      <StateLayer {...localStateLayerProps} />
    </button>
  );
}
