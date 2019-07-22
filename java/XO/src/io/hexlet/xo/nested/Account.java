package io.hexlet.xo.nested;

public class Account {

    private double amount;

    private final String number;

    private final String owner;

    public Account(final String number, final String owner) {
        this.number = number;
        this.owner = owner;
    }

    public double getAmount() {
        return this.amount;
    }

    public String getNumber() {
        return this.number;
    }

    public String getOwner() {
        return this.owner;
    }

    private synchronized double withdraw(final double amountToWithdraw) {
        if (amountToWithdraw > getAmount()) {
            final double amountToReturn = amountToWithdraw;
            this.amount = 0;
            return amountToReturn;
        }

//        if (amountToWithdraw < 0) return .0;

        this.amount = this.amount - amountToWithdraw;
        return amountToWithdraw;
    }

    public class Card {

        private final String number;

        public Card(String number) {
            this.number = number;
        }

        public String getNumber() {
            return number;
        }

        public double withdraw(final double amountToWithdraw) {
            return Account.this.withdraw(amountToWithdraw);
        }
    }
}
