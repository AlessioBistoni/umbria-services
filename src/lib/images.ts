function unsplash(id: string) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80`;
}

export const images = {
  heroMassage: unsplash("photo-1519823551278-64ac92734fb1"), // mani che massaggiano la schiena
  heroYoga: unsplash("photo-1506126613408-eca07ce68773"), // yoga al tramonto
  hotStones: unsplash("photo-1600334129128-685c5582fd35"), // hot stones
  oilMassage: unsplash("photo-1544161515-4ab6ce6db874"), // massaggio con olio
  outdoorMassageBW: unsplash("photo-1591343395082-e120087004b4"), // massaggio all'aperto b/n
  facialTreatment: unsplash("photo-1552693673-1bf958298935"), // trattamento viso estetico
  flowerBath: unsplash("photo-1526758097130-bab247274f58"), // vasca con petali di fiori
  spaEssentials: unsplash("photo-1540555700478-4be289fbecef"), // asciugamano, candela, tulipani
  pilatesClass: unsplash("photo-1518611012118-696072aa579a"), // lezione di pilates
  gymSitups: unsplash("photo-1571019613454-1cb2f99b2d8b"), // addominali
  gymLunges: unsplash("photo-1571019613914-85f342c6a11e"), // affondi in palestra
  smoothieBerries: unsplash("photo-1600718374662-0483d2b9da44"), // smoothie ai frutti di bosco
  umbriaWindow: unsplash("photo-1775922428717-fe41d4ce5751"), // finestra rustica su campagna umbra
  tuscanyHills: unsplash("photo-1758552218652-55cc191d7914"), // colline con fiori in primo piano
  villaTerrace: unsplash("photo-1533554030380-20991a0f9c9e"), // terrazza di villa con vista collina
  villaOnHill: "https://images.unsplash.com/12/gladiator.jpg?auto=format&fit=crop&q=80", // casale isolato sulla collina
  greenValley: unsplash("photo-1470071459604-3b5ec3a7fe05"), // vallata verde
  stoneArchway: unsplash("photo-1762423780435-b57d34d574c5"), // arco in pietra su cortile
} as const;
