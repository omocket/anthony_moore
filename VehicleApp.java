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
public class VehicleApp {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        
        //An input asking for customers' name
        String custFName;
        custFName = JOptionPane.showInputDialog("Enter your first name");
        
        //Checks if the input is empty
        while (custFName.equals("")) {
            custFName = JOptionPane.showInputDialog("Enter name again please");
        }
        
        //An input asking for customers' name
        String custLName;
        custLName = JOptionPane.showInputDialog("Enter your last name");
        
        //Checks if the input is empty
        while (custLName.equals("")) {
            custLName = JOptionPane.showInputDialog("Enter name again please");
        }
        
        //An input asking for customers' phone number
        String phoneNum;
        phoneNum = JOptionPane.showInputDialog("Enter your phone number");
        
        //Checks if the input is empty and if the characters are less than 10
        while (phoneNum.equals("") || (phoneNum.length() < 10)) {
            phoneNum = JOptionPane.showInputDialog("Please enter a phone number or a valid phone number");
        }
        
        //An input asking for number of vehicles
        int numOfVehicles;
        numOfVehicles = Integer.parseInt(JOptionPane.showInputDialog("Enter number of vehicles"));
        
        //Checks if the user enters a number between 1 and 10
        while ((numOfVehicles > 10) && (numOfVehicles < 1)) {
            numOfVehicles = Integer.parseInt(JOptionPane.showInputDialog("Enter the correct number of vehicles. Please try again"));
        }
        
        //An input asking for number of tanks
        int numOfTanks;
        numOfTanks = Integer.parseInt(JOptionPane.showInputDialog("Enter the number of tanks"));
        
        //Checks if the user enters the number tanks specified
        while ((numOfTanks != 2) && (numOfTanks != 4) && (numOfTanks != 8) && (numOfTanks != 10) && (numOfTanks != 15) && (numOfTanks != 20)) {
            numOfTanks = Integer.parseInt(JOptionPane.showInputDialog("Please enter the correct number of tanks"));
        }
        
        //Initializes the VehicleFactory class
        VehicleFactory info = new VehicleFactory(custFName, custLName, phoneNum, numOfVehicles, numOfTanks);
       
       //Method called to return first name
        info.getFName();
        
        //Method called to return last name
        info.getLName();
        
        //Method called to return phone number
        info.getPhone();
        
        //Method called to return number of vehicles
        info.vehiclesNum();
        
        //Method called to return number of tanks
        info.tanksNum();
        
        //A summary of customers' vehicle information
        info.getSummary();
    }
    
}
