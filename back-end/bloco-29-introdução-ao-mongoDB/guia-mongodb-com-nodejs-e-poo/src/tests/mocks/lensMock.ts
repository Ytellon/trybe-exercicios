import ILens from "../../interfaces/Lens";

const lensMock: ILens = {
  degree: 1.5,
  antiGlare: true,
  blueLightFilter: true,
};

const lensMockWithId: ILens & { _id: string } = {
  _id: "62cf1fc6498565d94eba52cd",
  degree: 1.5,
  antiGlare: true,
  blueLightFilter: true,
}

export { lensMock, lensMockWithId };