/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package akmprogramtwo;

/**
 *
 * @author anthony moore
 */
import javax.swing.JOptionPane;
import java.text.DecimalFormat;
public class VehicleFactory {
	//variables to hold our object properties
	private String fName;
        private String lName;
	private String phone;
	private int nbrVehicles =0;
	private int nbrTanks =0;
	private double manufactureCost =0;
	private double fuelTanksCost =0;
	private double subtotal =0;
	private double tax =0;
	private double total = 0;

	//constants to hold our pricing properties
	private final double VEHICLE_PRICE = 500.19;
	private final double FUELCELL_PRICE = 2.15;
        private final double TAX_RATE = .0725;
	
	//you have to create a constant and store the tax rate in it
	
	
	public VehicleFactory(String aName, String bName, String aPhone, int aNbrVehicles, int aNbrTanks){
		fName = aName;
                lName = bName;
                phone = aPhone;
                nbrVehicles = aNbrVehicles;
                nbrTanks = aNbrTanks;  
	
	}
        //A method to return customers' first name
        public String getFName() {
            
            return fName;
        }
        
        //A method to return customers' last name
        public String getLName() {
        
            return lName;
        }
        
        //A method to return a phone number
        public String getPhone() {
            
            return phone;
        }
        
        //A method to return number of vehicles
        public int vehiclesNum(){
            
            return nbrVehicles;
        }
        
        //A method to return the number of tanks
        public int tanksNum(){
            
            return nbrTanks;
        }
	
	//Calculate the manufacturing cost and store it in manufactureCost
	public double calcManufacturingCost(){
		manufactureCost = vehiclesNum() * VEHICLE_PRICE;
                
                return manufactureCost;
	}
	
	//Calculate the fuel tanks cost and store it in fuelTankCost
	public double calcFuelTankCost(){
		fuelTanksCost = vehiclesNum() * tanksNum() * 12 * 2.15;
                
                return fuelTanksCost;
	}
	
	//A method to calculate the subtotal and store it in subtotal
	public double calcSubtotal(){
            
		subtotal = calcManufacturingCost() + calcFuelTankCost();
                
                return subtotal;
	}
	
	//A method to calculate the tax and store it in tax
	public double calcTax(){
            
		tax = calcSubtotal() * .0725;
                
                return tax;
	}
	
	//A method to calculate the total and store it in total
	public double calcTotal(){
            
		total = calcSubtotal() + calcTax();
                
                        
                return total;
	}
	
	//A method to return a summary for this object here
	public String getSummary(){
		//Store summary in a summary variable
                String summary;
                DecimalFormat df = new DecimalFormat("#,###,###.00");
                summary = "WELCOME TO HAYLO MANUFACTURING\n\n"
                        + "Customer Name: " + getFName() + " " + getLName() +
                        "\nCustomer Phone: " + getPhone() + 
                        "\nNumber of Vehicles: " + vehiclesNum() + 
                        "\nNumber of Tanks: " + tanksNum() + 
                        "\nVehicle Cost($500.19/vehicle): " + "$" + df.format(calcManufacturingCost()) + 
                        "\nTanks Cost($2.15/Fuel Cell): " + "$" + df.format(calcFuelTankCost()) + 
                        "\nSubtotal: " + "$" + df.format(calcSubtotal()) + 
                        "\nTax(7.25%): " + "$" + df.format(calcTax()) +
                        "\nTotal: " + "$" + df.format(calcTotal());
                
		
		JOptionPane.showMessageDialog(null, summary);
                
                return summary;
	}
}
