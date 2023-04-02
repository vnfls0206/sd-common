import {create} from "zustand";

export interface IEditorData {
    value: string,
    action: {
        setValue: (value: string) => void
    }
}

const useEditorStore = create<IEditorData>((set) => ({
    value: '',
    action: {
        setValue: value => set((pre)=> ({...pre, value: value}))
    }
}))


export default useEditorStore;
export const useEditorValue = () => useEditorStore(state => state.value);

export const useEditorAction = () => useEditorStore(state => state.action);