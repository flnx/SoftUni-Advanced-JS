function constructionCrew(obj) {
  if (obj.dizziness) {
    obj.levelOfHydrated += obj.weight * 0.1 * obj.experience;
    obj.dizziness = false;
  } 

  return obj;
}

const output = constructionCrew({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true });

console.log(output);

// output: { weight: 80, experience: 1, levelOfHydrated: 8, dizziness: false }

