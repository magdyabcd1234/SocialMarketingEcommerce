import { useCountUp } from "@/hooks/useCountUp";


export default function Counter({ end, prefix = "", suffix = "", decimals = 0, className = "" }) {
    const { ref, value } = useCountUp(end, {decimals})
  return (
    <span ref={ref} className={className}>
    {prefix}
    {decimals ? value.toFixed(decimals) : value.toLocaleString()}
    {suffix}
    </span>
  )
}
