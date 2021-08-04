---
title: "My first project"
excerpt: "During my journey into getting to know Python, I have done lots of small projects to practice my python skills."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2020-04-03"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

During my journey into getting to know Python, I have done lots of small projects to practice my python skills. I thought it might be fun to show how I made my way through the exercise to write a mortgage calculator. I wrote this in three different ways, representing the three different steps and growth through my practice.

![Image test](/blog/my-first-project/calculator.jpg)

## Step 1

I started out with a script of which I now think: gosh this is so bad!! However, it was very good practice and by trying out different things, I also learned what can be done better. At first, I wrote the very basics: input the mortgage, input the years in which it should be paid back, get the terms, calculating the payment per term including interest, and printing out the information. I also tried to put some more advanced stuff in here, or at least, to me it felt like more advanced. 1) I controlled for invalid input (it has to be a number), and 2) I differentiated between plural and singular terms.

What I thought was so smart, but in `retrospect` was not the right way, was making my own formula in calculating the monthly payment. I tried to calculate the payment plus interest on a yearly basis, and divided it by the total terms. After one year, I calculated the remaining payment with interest again, and again divided it by the total terms. I did this until there were no terms left. The `remaining money`, which would also be a very small amount, I would add onto the total amount of payment. I then calculated the average payment per month, which would be what the person would have to pay monthly.

My own critics:
First of all, I returned every value of every function to the instance. In the end, there would be so many self. values, which is not necessary. It could even be dangerous when re-using these values, changing them by the next functions while this should not be the case. What I did, was renaming these values in each function that I re-used them in, so this danger was dealt with. However, this is lots of extra code while it could have been much simpler. Also, why did I return some variables to its own instance, while there was no need to? There was no need to recall self.interest_usable or self.terms_total_readable etc. So, this was the first thing I dealt with during the next step.

```py
import math

class MortgageCalculator():

    def __init__(self, interest):
        self.amount_total = self.get_amount_total()
        self.interest = interest
        self.interest_usable = interest/100+1
        self.years_total = self.get_years_total()
        self.terms_year = self.get_terms_year()
        self.terms_total_readable, self.terms_total_number = self.get_terms_total()
        self.terms_payment = self.get_terms_payment()
        self.terms_dict = self.get_terms_dict()
        self.terms_plural_singular = self.get_terms_plural_singular()
        self.years_plural_singular = self.get_years_plural_singular()
        self.get_printed_information()

    def get_amount_total(self):
        while True:
            amount_total = input("What is the amount of mortgage in euros?")
            if amount_total.isnumeric():
                return amount_total
            else:
                print("Your input is not valid, please try again\n")
                continue


    def get_years_total(self):
        while True:
            years_total = input("In how many years would you like to pay your mortgage back?")
            if years_total.isnumeric():
                return years_total
            else:
                print("Your input is not valid, please try again\n")
                continue


    def get_terms_year(self):
        terms_dict = {
            "yearly":1,
            "monthly":12,
            "weekly":52,
            "daily":365,
            }
        return terms_dict


    def get_terms_total(self):
        while True:
            terms_readable = input("How often would you like to have your payments: 'yearly', 'monthly', 'weekly' or 'daily'?")

            terms_total_readable = terms_readable.lower()

            for key, value in self.terms_year.items():
                if key == terms_readable:
                    terms_total_readable = key
                    terms_total_number = value
                    terms_total_number = int(terms_total_number)*int(self.years_total)
                    return terms_total_readable, terms_total_number
            else:
                print("Your input is not valid, please try again\n")
                continue


    def get_terms_payment (self):
        amount_total = float(self.amount_total)
        terms_total_number_1 = self.terms_total_number
        terms_total_number_2 = terms_total_number_1

        term_plusinterest = []

        while amount_total > 0 and terms_total_number_1 > 0:
            amount_total *= self.interest_usable
            terms_payment = amount_total / terms_total_number_2
            terms_year_number = (self.terms_year[self.terms_total_readable])

            while amount_total > 0 and terms_year_number > 0:
                term_plusinterest.append(terms_payment)
                amount_left = amount_total - terms_payment
                amount_total = amount_left
                terms_total_number_1 -=1
                terms_year_number -= 1

        terms_payment = (((sum(term_plusinterest))+amount_left)/terms_total_number_2)
        terms_payment = "{:.2f}".format(math.ceil(terms_payment*20)/20)
        return terms_payment


    def get_terms_dict(self):
        terms_dict = {
            "yearly": {
                "singular": "year",
                "plural": "years"
            },
            "monthly": {
                "singular": "month",
                "plural": "months"
            },
            "weekly": {
                "singular": "week",
                "plural": "weeks"
            },
            "daily": {
                "singular": "day",
                "plural": "days"
            }
        }
        return terms_dict


    def get_terms_plural_singular(self):
        t = self.terms_dict[self.terms_total_readable]
        return t["plural"] if int(self.terms_total_number) > 1 else t["singular"]


    def get_years_plural_singular(self):
        y = self.terms_dict["yearly"]
        return y["plural"] if int(self.terms_total_number) > 1 else y["singular"]


    def get_printed_information(self):
        total_interest_euros = (float(self.terms_payment) * float(self.terms_total_number))-float(self.amount_total)
        total_interest_euros = "{:.2f}".format(math.ceil(total_interest_euros*20)/20)


        print(f"Mortgage: € {self.amount_total}")
        print(f"Yearly interest: {self.interest}%")
        print(f"Total interest: €{total_interest_euros} ")
        print(f"{self.years_plural_singular.capitalize()}: {self.years_total}")
        print(f"Period: {self.terms_total_number} {self.terms_plural_singular}")
        print(f"\nYou will have to pay €{self.terms_payment} {self.terms_total_readable} for {self.terms_total_number} {self.terms_plural_singular}.")
```

## Step: 2

The first thing I did with my second script was rewriting the variables. As explained in the first step, there was no need to return every single variable to its own instance. Most of them could just be passed onto the next function. The only thing I would want to be able to recall from the instance, was the actual mortgage payment per month. The rest did not really matter and was only important to calculate in between the different functions. This made the code look a lot cleaner and easy to read.

This was the hardest step for me. I realized that my own calculation of the mortgage did not make sense. I calculated the interest per year, while the interest is an ongoing process throughout the total terms. I was so proud of my own calculator, but this feeling of pride fell into pieces. There was actually already an existing formula for this:

c =rP(1 + r)N(1 + r)N- 1

With r being the monthly interest rate (expressed as a decimal), N is the number of monthly payments (loan’s term), P is the total mortgage, and c is the monthly payment.

What took most of my time and energy, was understanding this formula completely. I have the problem that I cannot go on with my work, until I understand every single thing. I tried to get over it and move on, but whenever I tried, my mind wandered off, back to this formula and how the heck this works. Most of it, I do understand, but the complete picture, I do not.
What I found on the internet is the following:
Amount owed at initiation: P
Amount owed after 1 month: (1 + r) P − c
Amount owed after 2 months: (1 + r)((1 + r) P − c) − c = (1 + r)2 P − (1 + (1 + r)) c
Amount owed after 3 months: (1 + r)((1 + r)((1 + r) P − c) − c) − c = (1 + r)3 P − (1 + (1 + r) + (1 + r)2) c

Okay, this part seemed logical. The first month you pay 1 + interest times the total mortgage minus the payment that month. After two months, the same, plus another monthly payment, etc. But then, the next step is as following:

“Applying this formula to the amount owed at the end of the Nth month gives (using p N to succinctly denote the function value p N ( x ) at argument value x = (1+r )” :

Amount owed at end of month N:

= (1 + r)N P −(1 + r)N- 1(1 + r)- 1

= (1 + r)N P −(1 + r)N- 1rc

And this last step, that is where I got lost. I spent so many hours figuring out this formula. This is really something I should work on: focusing on the important stuff and not getting lost into details. I tried accepting the fact that I am not a mathematician, but that I just want to become a data analist, where focusing on big data and having some programming skills is more important.

However, while writing this blog this feeling of unfulfillment and frustration is coming up again: How on earth does this formula exactly work?! If anyone knows, feel free to contact me and help me out leaving this behind me once and forever.

```python
import math

class MortgageCalculator():

    def __init__(self):
        self.amount_total = self.get_amount_total()
        self.interest = 5.2
        self.years_total = self.get_years_total()
        self.months_total = self.years_total*12
        self.monthly_payment = self.get_monthly_payment()
        self.get_printed_information()


    def get_amount_total(self):
        while True:
            amount_total = input("What is the amount of mortgage in euros?")
            if amount_total.isnumeric():
                return float(amount_total)
            else:
                print("Your input is not valid, please try again\n")
                continue


    def get_years_total(self):
        while True:
            years_total = input("In how many years would you like to pay your mortgage back?")
            if years_total.isnumeric():
                return int(years_total)
            else:
                print("Your input is not valid, please try again\n")
                continue


    def get_monthly_payment (self):
        amount_total = self.amount_total
        interest = self.interest
        monthly_interest = interest / 100 / 12
        months_total = float(self.months_total)

        monthly_payment = monthly_interest / (1- (1 + monthly_interest)**(-months_total)) * amount_total

        return float(monthly_payment)


    def get_printed_information(self):
        amount_total = self.amount_total
        amount_total = "{:.2f}".format(math.ceil(amount_total*20)/20)

        amount_total_interest = (self.monthly_payment * float(self.months_total)) - self.amount_total
        amount_total_interest = "{:.2f}".format(math.ceil(amount_total_interest*20)/20)

        monthly_payment = self.monthly_payment
        monthly_payment = "{:.2f}".format(math.ceil(monthly_payment*20)/20)

        print(f"Mortgage: € {amount_total}")
        print(f"Yearly interest: {self.interest}%")
        print(f"Total interest: €{amount_total_interest} ")
        print(f"Years: {self.years_total}")
        print(f"Period: {self.months_total} months")
        print(f"\nYou will have to pay €{monthly_payment} for {self.months_total} months.")
}
```

What I thought was so smart, but in retrospect was not the right way, was making my own formula in calculating the monthly payment. I tried to calculate the payment plus interest on a yearly basis, and divided it by the total terms. After one year, I calculated the remaining payment with interest again, and again divided it by the total terms. I did this until there were no terms left. The remaining money, which would also be a very small amount, I would add onto the total amount of payment. I then calculated the average payment per month, which would be what the person would have to pay monthly.
