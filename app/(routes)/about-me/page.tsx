import TransitionPage from "@/component/transitionPage";

const PageAboutme = () => {
    return (
        <main className="relative flex min-h-[100vh] items-center justify-center px-6 py-20 text-center">
            <TransitionPage />
            <div className="w-full max-w-4xl mx-auto">
                <p className="mx-auto max-w-3xl text-base leading-8 text-white md:text-lg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
                </p>
            </div>
        </main>
    )
}

export default PageAboutme;