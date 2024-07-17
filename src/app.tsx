import artemisLogo from "./assets/logo_1.png";
import { Countdown } from "./components/countdown";
// import { Link } from "./components/link"
// import { Social } from "./components/social";

export default function App() {
  const launch = new Date(Date.UTC(2025, 7, 1, 0, 1))
  // Semptember 1st, 2025 00:01 GMT
  
  return (
    <div className="text-white h-full w-full bg-image bg-cover flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col justify-center items-center">
        <img 
          src={artemisLogo} 
          alt="Artemis program" 
          className="w-[200px] mt-[-180px]" 
        />
        <p className="font-display text-5xl font-bold mt-[50px] mb-[50px]">
          <span>Đếm Ngược Đến</span> Ngày 1 Tháng 1 Năm 2025
        </p>
        <p className="absolute bottom-0 font-bold text-3xl mb-[10px] font-display">&copy; Mọi Bản Quyền Thuộc Về Huỳnh Vĩnh Tiến</p>
      </div>

        <Countdown date={launch} />

      {/* <div className="flex flex-col gap-3">
        <div className="flex gap-2 text-xl uppercase">
          <Link 
            href="https://www.nasa.gov/feature/artemis/"
            target="_blank"
          >
            Learn more
          </Link>
          <Link 
            href="https://youtube.com"
            target="_blank"
          >
            Watch live
          </Link>
        </div>
        <Social />
      </div> */}
    </div>
  )
}