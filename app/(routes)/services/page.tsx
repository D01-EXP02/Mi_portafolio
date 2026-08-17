import Perfil from "@/component/circle_image";
import TransitionPage from "@/component/transitionPage";
import Avatar from "@/component/avatar_services";
import Sliderservices from "@/component/Slider_Services";
const PageServices = () => {
    return (
        <>
        <div className="relative w-full min-h-screen bg-slate-900">
            <TransitionPage />
            <Perfil />
            <Avatar />

            <div className="grid items-center justify-center max-w-5xl h-screen gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-20 md:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        Mis{" "}
                        <span className="font-bold text-secondary">
                            Servicios.
                        </span>
                    </h1>
                        <p className="mb-3 text-xl text-gray-300 ">
                                lorem upsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        </p>
                        <button className="px-3 py-2 rounded-lg bg-secondary/65 hover:bg-secondary/65">
                            Contacta conmigo
                        </button>
                    
                </div>

                <div>
                    <Sliderservices />
                </div>
            </div>

        </div>
        </>
    )
}

export default PageServices;