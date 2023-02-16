import {useState} from "react";
import {useEffect} from "react";

export default function CountUp({ end, caption }) {
  const duration = 2;
  const [number, setNumber] = useState(0)
  const [id, setId] = useState(null)

  useEffect(() => {
    const diff = Math.floor((duration * 1000) / end);

    setId(setInterval(end => {
      setNumber(number => {
        if (number < end) return number + 1
        return end
      })
    }, diff, end))

    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (number >= end) {
      clearInterval(id)
    }
  }, [number])

  return (
    <div className="flex flex-col text-white items-center">
      <p className="text-4xl font-bold">{number}</p>
      <p className="text-xl">{caption}</p>
    </div>
  )
}
