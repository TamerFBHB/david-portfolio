import "./Logo.scss"
import { Playball } from 'next/font/google'
 
const playball = Playball({ subsets: ['latin'] ,weight: [ "400"]})


export default function Logo() {
    return (
        <div className="wrapper">
            <h1 className={playball.className}>T</h1>
        </div>
    )
};
