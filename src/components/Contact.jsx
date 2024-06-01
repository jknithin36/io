export default function Contact() {
    return (
        <div
            id="contact"
            className="flex min-h-screen flex-col items-center justify-center bg-white p-6"
        >
            <div className="text-center text-black">
                <h1 className="font-chivo mb-4 text-[60px] uppercase sm:text-[80px] md:text-[100px] lg:text-[120px]">
                    JK NITHIN KUMAR
                </h1>
                <h3 className="font-rubik mb-8 text-[40px] uppercase sm:text-[50px] md:text-[60px] lg:text-[70px]">
                    WORK WITH ME
                </h3>
                <div className="space-y-4">
                    <p className="font-caveat py-2 text-lg text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
                        Sassafras, Holly Park, Kent 44240 Ohio
                    </p>
                    <p className="font-caveat py-2 text-lg text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
                        +1 330-281-2484
                    </p>
                    <div className="inline-block rounded-lg border border-gray-500 px-4 py-2">
                        <p className="font-caveat text-lg text-gray-700 sm:text-xl md:text-2xl lg:text-3xl">
                            <a
                                href="mailto:insane414425@gmail.com"
                                className="text-blue-500 hover:text-blue-700"
                            >
                                insane414425@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
