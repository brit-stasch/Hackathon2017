import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class AvailabilitySign {
	public static void main(String args[]) {
		Scanner in = new Scanner(System.in);

		System.out.println("What is your status? \n('A'- Away, 'D'- Do not disturb, 'H'- Here) ");
		String status = in.nextLine();

		if ((!status.equalsIgnoreCase("A") && !status.equalsIgnoreCase("D") && !status.equalsIgnoreCase("H"))){
			System.out.println("Invalid status. Setting to default (H)");
			status = "H";
		}

		System.out.println("What message would you like to display?");
		Map<Integer,String> messages = getMessages(status);
		System.out.println(messages);
		int messageNumber = in.nextInt();

		if (messages.keySet().contains(messageNumber)){
			System.out.println("Setting message..");
			System.out.println("Message set.");
			System.out.println("\nDisplay text: \n" + messages.get(messageNumber));
		}
		else
			System.out.println("Message number not found.");
	}

	public static Map<Integer, String> getMessages(String status){
		// Perhaps incorporate this into a DB instead of a map
		Map<Integer, String> messages = new HashMap<Integer, String>();
		if (status.equalsIgnoreCase("H")){
			messages.put(1, "Hey there!");
			messages.put(2, "What's up?");
			messages.put(3, "Taking questions");
			messages.put(4, "How's your day going?");
			messages.put(5, "I am working remotely");
		}

		if (status.equalsIgnoreCase("A")){
			messages.put(1, "I am currently away from my desk");
			messages.put(2, "I'm on PTO");
			messages.put(3, "I am in a meeting");
		}
		
		if (status.equalsIgnoreCase("D")){
			messages.put(1, "Currently fighting fires, please come back later");
			messages.put(2, "Please, do not disturb");
			messages.put(3, "Currently hacking...");
		}


		return messages;

	}



	//add messages to messages map
	//System.out.println(messages.keySet().size()+1);

}
