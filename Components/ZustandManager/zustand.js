import create from "zustand"

const useStore = create((set) => ({
     warenkorb: [],
     größe: "none",
     farbe: "none",
     language: "none",
     preis: 0.0,
     hinzufügen: (artikel) => set((state) => ({ warenkorb: [...state.warenkorb, artikel] })),
     setGröße: (größe) => set((state) => ({ größe })),
     setFarbe: (farbe) => set((state) => ({ farbe })),
     setLanguage: (language) => set((state) => ({ language })),
     setPreis: (preis) => set((state) => ({ preis }))
}))

export default useStore
