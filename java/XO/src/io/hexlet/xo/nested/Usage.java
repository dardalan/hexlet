package io.hexlet.xo.nested;

public class Usage {
    public static void main(String[] args) {
        final Account myAccount = new Account("123dsa45", "Sviatoslav");
        final Account.Card myCard = myAccount.new Card("1111 2222 3333 4444");
        System.out.println(myAccount.getAmount());
        myCard.withdraw(-1000);
        System.out.println(myAccount.getAmount());
    }
}
