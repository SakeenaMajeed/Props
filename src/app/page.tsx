import Button from "./component/Button";


export default function Home() {
  return (
    <div className="flex gap-x-10">
    <Button bgcolor="bg-red-600" textcolor="text-white" text = "contact me"/> 
    <Button bgcolor="bg-green-600" textcolor="text-black" text = "about me"/>
    <Button bgcolor="bg-gray-600" textcolor="text-yellow-500" text = "home page"/>
    </div>
  );
}
