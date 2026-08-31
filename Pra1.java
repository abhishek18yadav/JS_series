import java.util.*;
class Car{
    String brand;
    String model;
    Double price;
    String type;
    Car(String br, String mo, Double prc, String ty){
        brand = br;
        mo = model;
        price = prc;
        type = ty;
    }
}
class PetrolOrDisealCar extends Car{
   
    Double tankCapacity;
    Double mileage;
    PetrolOrDisealCar(String br, String mo, Double prc, String ty, Double tankCap, Double mile){
        super(br, mo, prc, ty);
        tankCapacity = tankCap;
        mileage = mile;
    }
}
class SmartHybridCar extends Car{
    Double batteryCapacity;
    Double tankCapacity;
    Double mileage;
    SmartHybridCar(String br, String mo, Double prc, String ty, Double batCap, Double tankCap, Double mile){
        super(br, mo, prc, ty);
        batteryCapacity = batCap;
        tankCapacity = tankCap;
        mileage = mile;
    }
}
class CarService{
    public LinkedHashMap<String,Double>getAveragesByType(ArrayList<Car>cars, String type){
        LinkedHashMap<String,Double> ans = new LinkedHashMap<String,Double>();
        for(Car c : cars){
            if(type == "hybrid"){
                Double avgtnk = 0.0, btcap = 0.0;
                int count =0;
                if(c instanceof SmartHybridCar){
                    SmartHybridCar s = (SmartHybridCar)c;
                    avgtnk += s.tankCapacity;
                    btcap += s.batteryCapacity;
                    count++;
                }
                if(count > 0){
                    avgtnk = avgtnk/count;
                    btcap = btcap/count;
                    ans.put(c.brand, avgtnk);
                    ans.put(c.brand, btcap);
                }
            }
            if(type == "petrol" || type == "diesel"){
                Double avtnk = 0.0;
                int count =0;
                if(c instanceof PetrolOrDisealCar){
                    PetrolOrDisealCar p = (PetrolOrDisealCar)c;
                    avgmil += p.tankCapacity;
                    count++;
                }
                if(count > 0){
                    avgmil = avgmil/count;
                    ans.put(c.brand, avgmil);
                }
            }
        }
        
        return ans;
    }
    public LinkedHashMap<String,Double>getMinMileageByBrand(ArrayList<Car>cars){
        LinkedHashMap<String,Double> ans = new LinkedHashMap<String,Double>();
        for(Car c : cars){
            Double mil = 0.0;
            if( c instanceof PetrolOrDisealCar){
                PetrolOrDisealCar p = (PetrolOrDisealCar)c;
                mil = p.mileage;
            }
            if(c instanceof SmartHybridCar){
                SmartHybridCar s = (SmartHybridCar)c;
                mil = s.mileage;
            }
            if(!ans.contain(c.brand) || ans.get(c.brand) > mil){
                ans.put(c.brand, mil);
            }
        }
        return ans;
    }
}
class Pra1{
    
    public static void main(String []args){
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine());
        ArrayList<Car> cars = new ArrayList<Car>();
        for(int i=0; i<n; i++){
            String brand = sc.nextLine();
            String model = sc.nextLine();
            Double price = Double.parseDouble(sc.nextLine());
            String type = sc.nextLine();
            if(type == "petrol" || type == "diesel"){
                Double tankCapacity = Double.parseDouble(sc.nextLine());
                Double mileage = Double.parseDouble(sc.nextLine());
                PetrolOrDisealCar p = new PetrolOrDisealCar(brand, model, price, type, tankCapacity, mileage);
                cars.add(p);
            }
            else if(type == "hybrid"){
                Double batteryCapacity = Double.parseDouble(sc.nextLine());
                Double tankCapacity = Double.parseDouble(sc.nextLine());
                Double mileage = Double.parseDouble(sc.nextLine());
                SmartHybridCar s = new SmartHybridCar(brand, model, price, type, batteryCapacity, tankCapacity, mileage);
                cars.add(s);
            }
        }
        String searchType = sc.nextLine();
        CarService cs = new CarService();
        if(searchType == "petrol" || searchType == "diesel"){
            LinkedHashMap<String,Double>ans = cs.getMinMileageByBrand(cars);
            for(Map.Entry<String,Double> e : ans.entrySet()){
                System.out.println(e.getKey() + " " + e.getValue());
            }
        }
        else if(searchType == "hybrid"){
            LinkedHashMap<String,Double> ans = cs.getAveragesByType(cars, searchType);
            for(Map.Entry<String,Double> e : ans.entrySet()){
                System.out.println(e.getKey() + " " + e.getValue());
            }
        }
    }
}
