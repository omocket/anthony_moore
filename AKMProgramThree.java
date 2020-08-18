/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package akmprogramthree;

import javax.swing.JOptionPane;
import javax.swing.JTextArea;

/**
 *
 * @author anthony moore
 */
public class AKMProgramThree {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        
        Dealership carDealer = new Dealership();
        
        while(true) {
        
            String[] menu = {"Add Car","Remove Car","Update Car","List Cars","Clear Cars","Find Car","Exit Menu"};
            
            int index = JOptionPane.showOptionDialog(null,"Select a MaxCar Operation","MaxCar the Best Car Dealership", JOptionPane.YES_NO_OPTION, JOptionPane.INFORMATION_MESSAGE, null, menu, "Add Car");
            
            if(index == 0){
                try{
                    //perform add
                    String input = JOptionPane.showInputDialog(null, "ENTER THE CAR INFORMATION SEPARATED BY SPACES\n\n VIN_CAR_MAKE_CAR_MODEL_CAR_YEAR\n\n");

                    String[] carInfo = input.split(" ");
                    
                    if(carInfo[0].length() != 5){
                        throw new Exception("The VIN must contain 5 characters");
                    }

                    Car aCar = new Car(carInfo[0], carInfo[1], carInfo[2], carInfo[3]);
                    carDealer.addCar(aCar);

                    JOptionPane.showMessageDialog(null, "Car " + carInfo[0] + " was added!");
                }catch(NumberFormatException nfEx){
                    JOptionPane.showMessageDialog(null, "The value you entered is incorrect.\n\n Please check the format and try again");
                }catch(Exception ex){
                    JOptionPane.showMessageDialog(null, ex.getMessage());
                }
                }else if(index == 1){
                    
               //perform delete
               String input = JOptionPane.showInputDialog(null, "ENTER THE VIN OF THE CAR TO REMOVE\n\n VIN\n\n");

               carDealer.removeCar(input);
               
               JOptionPane.showMessageDialog(null, "Car " + input + " was deleted!");

                }else if(index == 2){
                    
                //perform update
                try {
                String input = JOptionPane.showInputDialog(null, "ENTER THE VIN OF THE CAR TO UPDATE\n\n VIN\n\n");
                String make = JOptionPane.showInputDialog(null,"ENTER MAKE OF CAR");
                String model = JOptionPane.showInputDialog(null, "ENTER MODEL OF CAR");
                String year = JOptionPane.showInputDialog(null, "ENTER YEAR OF CAR");
                String[] carUpdate = {input,make,model,year};
                
                carUpdate[0] = input;
                carUpdate[1] = make;
                carUpdate[2] = model;
                carUpdate[3] = year;
                Car aCar = new Car(carUpdate[0], carUpdate[1], carUpdate[2], carUpdate[3]);
                
                if(carUpdate[0].length()!= 5){
                    throw new Exception("The VIN must contain 5 characters.");
                }
                
                    carDealer.updateCar(aCar);
                
                JOptionPane.showMessageDialog(null, "CAR HAS BEEN UPDATED.");
                
                }catch(Exception ex) {
                    JOptionPane.showMessageDialog(null,ex.getMessage());
                }  
           }else if(index ==3){
               
               //perform list
               JOptionPane.showMessageDialog(null,new JTextArea(carDealer.listCars()));
               
           }else if(index == 4){
               
               //perform clear
               carDealer.clearCar();
              
           }else if(index == 5){
               
               //perform search
               String input = JOptionPane.showInputDialog(null, "Please enter the VIN of the car you are searching for.");
               
               String result = carDealer.findCar(input);
               
               JOptionPane.showMessageDialog(null, result);
               
           }else if(index ==6){
               
               //exit the program
               JOptionPane.showMessageDialog(null, "Thank you for using the MaxCar search engine. Exiting!");
               System.exit(0);
           }
        } 
    }
            
}