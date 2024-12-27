import { FormClientSupport } from "@/components/FormClientSupport"
import logo from "@/assets/logo.png"

export const ClientForm = () => {
    return (
        <>
            <section>
                <div className="bg-black flex justify-center py-20 px-10 md:px-32">
                    <img src={logo} alt="" />
                </div>

                <section
                    className="items-center px-10 md:px-48 justify-center bg-gradient-to-r from-[#4A90E2] to-[#59B179] py-4"
                >
                    <div className="border-l-2 p-5 md:p-14 border-white text-white">
                        <h1 className="text-3xl md:text-6xl mb-2 font-bold">Client Support</h1>
                    </div>
                </section>
                <FormClientSupport />
            </section>
        </>
    )
}