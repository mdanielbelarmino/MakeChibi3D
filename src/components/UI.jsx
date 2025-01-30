import { useEffect } from "react";
import { pb, useConfiguratorStore } from "../store";


const AssetsBox = () => {
    const { categories, currentCategory, fetchCategories, setCurrentCategory } =
        useConfiguratorStore();

    useEffect(() => {
        fetchCategories();
    }, []);
    return (
        <div className="flex flex-col gap-6 rounded-2xl bg-white p-6 drop-shadow-md">
            <div className="pointer-events-auto flex items-center gap-6">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setCurrentCategory(category)}
                        className={`transition-colors duration-200 font-medium ${currentCategory.name === category.name
                                ? "text-indigo-500"
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            <div className="flex flex-wrap gap-2">
                {currentCategory?.assets.map((asset, index) => (
                    <button
                        key={index}
                        className={`w-20 h-20 rounded-md overflow-hidden bg-gray-200 pointer-events-auto hover:opacity-100 transition-all border-2 duration-500`}
                    >
                        <img src={pb.files.getUrl(asset, asset.thumbnail)} />
                    </button>
                ))}
            </div>
        </div>
    );
};


const DownloadButton = () => {
    return (
        <button className="pointer-events-auto rounded-lg bg-indigo-500 px-4 py-3 font-medium text-white transition-colors duration-300 hover:bg-indigo-600">
            Download
        </button>
    );
};

export const UI = () => {

    return (
        <main className="z-10 pointer-events-none fixed inset-0 p-10">
            <div className="mx-auto flex h-full w-full max-w-screen-xl flex-col justify-between">
                <div className="flex items-center justify-between">
                    <a
                        className="pointer-events-auto"
                        href="https://makechibi3d-u31976.vm.elestio.app/"
                    >
                        <img className="w-20" src="images/icon.png"/>
                    </a>
                    <DownloadButton />
                </div>
                <div className="flex flex-col gap-6">
                    <assetBox />
                </div>
            </div>
        </main>
    )

}