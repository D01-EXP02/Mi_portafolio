import Avatar from "@/component/avatar";
import ContainerPage from "@/component/container";
import CounterService from "@/component/counterservice";
import Timeline from "@/component/time_line";
import TransitionPage from "@/component/transitionPage";

const PageAboutme = () => {
    return (
        <div className="relative w-full min-h-screen bg-slate-900">
            <div className="fixed inset-0 bg-slate-900 -z-10"></div>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Mi Trayectoria{''}
                    <span className="font-bold text-secondary"> Profesional</span>
                </h1>

                <CounterService />
                <Timeline />
            </ContainerPage> 
        </div>
    )
}

export default PageAboutme;