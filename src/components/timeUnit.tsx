interface TimeUnitProps {
  time: number,
  unit: string,
}

export function TimeUnit({ time, unit }: TimeUnitProps) {
  const Shadow = {
    textShadow: "0 0 1rem white",
  }

  const formatedTime = (time < 10) ? ('0' + String(time)) : String(time)

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div style={Shadow} className="text-8xl font-extrabold">{formatedTime}</div>
      <div style={Shadow} className="text-lg">{unit}</div>
    </div>
  );
}
