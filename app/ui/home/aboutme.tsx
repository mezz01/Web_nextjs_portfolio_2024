import Image from "next/image";

export default function Aboutme() {
    return (
        <div className="rounded-[60px] bg-stone-200 text-stone-950 flex flex-col h-dvh">
            <h1 className="text-9xl italic p-24 pl-44">
                About me.
            </h1>
            <div className="flex justify-around rounded-lg">
                <p className="text-4xl p-24 font-sans font-thin">With a passion for programming that spans over 4 years,<br />
I've delved deep into the realms of web development and explored<br />
various other sectors of the tech landscape. My journey has been a <br />
blend of learning, experimenting, and pushing boundaries to master the craft.
<br /><br /><br />
Now, I find myself at a pivotal moment, eager to contribute my expertise <br />
and learn from a hardworking, ambitious team. I believe that collaboration fuels growth,<br />
and I'm excited about the prospect of sharpening my skills alongside <br />
like-minded individuals who are driven to excel. <br />

</p>

                <Image src="/me.svg" 
                    alt="Avatar"
                    className="pb-24 pr-56"
                    width={500}
                    height={500}
                ></Image>
            </div>
        </div>
    )
}