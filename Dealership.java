/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package akmprogramthree;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author moore
 */
//Creating map to list cars
public class Dealership {
    
    private HashMap<String,Car> carInventory;
    
    public Dealership() {
    
        carInventory = new HashMap<String,Car>();
    
    }
    //Add Car
    public void addCar(Car aCar){
        
        carInventory.put(aCar.getVin(), aCar);
    
    }
    //Delete Car
    public void removeCar(String aVin) {
        
        carInventory.remove(aVin);
    
    }
    //Clear List
    public void clearCar() {
    
        carInventory.clear();
     
    }
    //Update Car
    public void updateCar(Car aCar) {
    
        carInventory.put(aCar.getVin(), aCar);
        
    }

    //Find Car
    public String findCar(String aVin){
        String carInfo = "Car information not found.";
        
        if(carInventory.containsKey(aVin)){
            
            for(Map.Entry<String,Car> carEntry : carInventory.entrySet()){

                if(carEntry.getKey().equalsIgnoreCase(aVin)){
                
                    carInfo = "Car VIN: " + aVin + " was found!!\n\n" + carEntry.getValue().getSummary();
                }
            }
            
        }
    
        return carInfo;
    }
    //Liest Cars
    public String listCars() {
        
        String summary = "Listing of Cars\n\n";
        
        for(Map.Entry<String,Car> carEntry : carInventory.entrySet()) {
        
            summary += carEntry.getValue().getSummary() + "\n";
        }
        
        return summary;
    }
    
}
