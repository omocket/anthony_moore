/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package akmprogramthree;

/**
 *
 * @author moore
 */
//Creating car class
public class Car {
    
    private String vin;
    private String make;
    private String model;
    private String year;
    
//Create car object
public Car(String aVin, String aMake, String aModel, String aYear) {
    vin = aVin;
    make = aMake;
    model = aModel;
    year = aYear;
}
//Retrieve VIN
public String getVin() {
    
    return vin;

}
//Retrieve the make of the car
public String getMake() {
    
    return make;

}
//Retrieve the model of the car
public String getModel() {

    return model;
}
//Retrieve the year of the car
public String getYear(){

    return year;
}
//Retrieve summary
public String getSummary() {
    
    return vin + "\t" + make + "\t" + model + "\t" + year;
}

}