import {create} from "zustand";

export interface IPageData {
    pageTitle: string,
    action: {
        setPageTitle: (title: string) => void
    }
}

const usePageStore = create<IPageData>((set) => ({
    pageTitle: '',
    action: {
        setPageTitle: title => set((pre)=> ({...pre, pageTitle: title}))
    }
}))


export default usePageStore;
export const usePageTitle = () => usePageStore(state => state.pageTitle);

export const usePageAction = () => usePageStore(state => state.action);