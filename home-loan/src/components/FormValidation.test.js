import {
    textRequired,
    checkboxRequired,
    addressValidation,
    descriptionValidation,
    selectValidation
  } from "./FormValidation";
  
  describe("validations", () => {
    it("should validate the textRequired valiation", () => {
      const fail = textRequired();
      expect(fail).toBe("Required");
  
      const pass = textRequired("pass");
      expect(pass).toBe(undefined);
    });
  
    it("should validate the checkboxRequired valiation", () => {
      const fail = checkboxRequired();
      expect(fail).toBe("Required");
  
      const pass = checkboxRequired("yes");
      expect(pass).toBe(undefined);
    });
  
    it("should validate the addressValidation valiation", () => {
      const fail = addressValidation(
        "asasdasdasdasd asas das das das das da sd asd asd asd as das das dasasdasdas "
      );
      expect(fail).toBe("address should not exceed 50 characters");

      const pass1 = addressValidation(
        "asasdasdasdasd asas das das das das da "
      );
      expect(pass1).toBeFalsy();
  
      const pass = addressValidation();
      expect(pass).toBe(undefined);
    });
  
    it("should validate the descriptionValidation valiation", () => {
      const fail = descriptionValidation("asas");
      expect(fail).toBe("Description should be between 10 and 200 words");
  
      const emptyPass = descriptionValidation();
      expect(emptyPass).toBe(undefined);
  
      const pass = descriptionValidation("asd asdsdw d wd d 3 d2 d");
      expect(pass).toBe(undefined);
    });
  
    it("should validate the selectValidation valiation", () => {
      const fail = selectValidation();
      expect(fail).toBe("Required");
  
      const zeroFail = selectValidation(0);
      expect(zeroFail).toBe("Required");
  
      const pass = selectValidation(1);
      expect(pass).toBe(undefined);

      const zeroFail1 = selectValidation("Select one");
      expect(zeroFail1).toBe("Required");
    });
  });
  