import "./index.less"
import React, { useLayoutEffect, useRef, useState } from "react"

enum Tags {
  "_" = "sub",
  "^" = "sup",
  "\\underline" = "underline",
  "\\overline" = "overline",
  "\\sum" = "sum"
}
const QkGenerateMathFormula: React.FC<{ content: string }> = ({ content }) => {
  const mathFormula = useRef<HTMLSpanElement>(null)
  const [varStyle, setVarStyle] = useState<CSSStyleDeclaration & any>()

  const reg =
    Object.keys(Tags)
      .map(value => "\\" + value + "\\{|")
      .join("") + "\\}"
  // console.log(new RegExp(reg, "g"))
  useLayoutEffect(() => {
    /** 设置上标位置 */
    const fontSize = window
      .getComputedStyle(mathFormula.current ?? document.body)
      .getPropertyValue("font-size")

    /**
     * 设置SUM相关样式
     * */
    let minFontSize = "12px"
    const SUMS = mathFormula.current?.querySelectorAll("sum")
    if (SUMS?.length) {
      SUMS.forEach(SUM => {
        const [firstNode, lastNode] =
          SUM?.childNodes as unknown as HTMLElement[]
        const len = Math.max(
          ...[firstNode.innerHTML, lastNode.innerHTML].map(item => item.length)
        )
        minFontSize = window.getComputedStyle(
          firstNode ?? document.body
        ).fontSize
        SUM.setAttribute("content", new Array(Math.ceil(len)).fill(1).join(""))
      })
    }
    setVarStyle({
      "--font-size": `${fontSize}`,
      "--min-font-size": `${minFontSize}`
    })
  }, [])
  let html = String.raw`${content}`
  const closeTags: string[] = []
  html = html.replace(new RegExp(reg, "g"), (v: string): string => {
    let tag = ""
    if (!closeTags.length && v === "}") return v
    if (v == "}") {
      tag = `</${closeTags.pop()}>`
    } else {
      const key = v.replace(/\{/g, "") as keyof typeof Tags
      const k = Tags[key]
      closeTags.push(k)
      tag = `<${k}>`
    }
    return tag
  })
  return (
    <span
      className="qk-math-formula"
      style={varStyle}
      ref={mathFormula}
      dangerouslySetInnerHTML={{ __html: html }}
    ></span>
  )
}
export default QkGenerateMathFormula
