function getYearsOfExperience() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 0-11, September is 8
  const startYear = 2016;
  const yearsOfExperience =
    currentYear - startYear - (currentMonth < 8 ? 1 : 0);
  return yearsOfExperience;
}

export default getYearsOfExperience;
