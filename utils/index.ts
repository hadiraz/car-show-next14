export async function fetchCars() {
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

    const headers = {
        'X-RapidAPI-Key': '705793a7bdmsh68ada9644811f24p143f2bjsn34a103b41d68',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(url, { headers: headers });
    try {
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
        return false
    }
}
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  }; 