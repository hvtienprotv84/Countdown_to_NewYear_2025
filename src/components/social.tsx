import {
  FaXTwitter as X,
  FaFacebookF as FB,
  FaInstagram as IG,
} from "react-icons/fa6";

export function Social() {
  return (
    <div className="flex gap-2 justify-center items-center">
      <a 
        href="https://www.instagram.com/nasaartemis/"
        target="_blank"
        className="bg-orange-400/50 size-6 rounded-md p-1"
      >
        <IG className="text-bg size-full"/>
      </a>
      <a 
        href="https://twitter.com/NASAArtemis"
        target="_blank"
        className="bg-orange-400/50 size-6 rounded-md p-1"
      >
        <X className="text-bg size-full"/>
      </a>
      <a 
        href="https://www.facebook.com/NASAArtemis/"
        target="_blank"
        className="bg-orange-400/50 size-6 rounded-md p-1"
      >
        <FB className="text-bg size-full"/>
      </a>
    </div>
  );
}
