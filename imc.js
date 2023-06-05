package imc;

import java.text.DecimalFormat;
import javax.swing.JOptionPane;
import javax.swing.UIManager;


public class Imc {    
    
    public static void main(String[] args) {
        
       String p, a;

        float peso;
        float altura;
        float imc;

        p = JOptionPane.showInputDialog("Coloque o seu peso: ");
        peso = Float.parseFloat(p);

        a = JOptionPane.showInputDialog("Coloque a sua altura:");
        altura = Float.parseFloat(a);

        imc = peso / (altura * altura);  
     
        
       	DecimalFormat df = new DecimalFormat("##.##");       

        
        if (imc <= 17) {
            JOptionPane.showMessageDialog(null,df.format(imc) + "Você está muito abaixo do peso");
        }
        if (imc >= 17 && imc < 18.50) {
            JOptionPane.showMessageDialog(null, df.format(imc) + " Você está abaixo do peso");
        }
        if (imc >= 18.50 && imc < 25) {
            JOptionPane.showMessageDialog(null, df.format(imc) + "Seu peso está normal");
        }
        if (imc >= 25 && imc < 30) {
            JOptionPane.showMessageDialog(null, df.format(imc) + "Você está acima do peso");
        }
        if (imc >= 30 && imc < 35) {
            JOptionPane.showMessageDialog(null, df.format(imc) + "Você está com obesidade I");
        }
        if (imc >= 35 && imc < 40) {
            JOptionPane.showMessageDialog(null, df.format(imc) + "Você está com obesidade II (severa)");
        }
        if (imc >= 40) {
            JOptionPane.showMessageDialog(null, df.format(imc) + "Você está com obesidade III (mórbida)");
        }
    }

}