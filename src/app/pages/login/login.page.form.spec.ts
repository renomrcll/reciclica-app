import { FormGroup } from "@angular/forms";
import { LoginPageForm } from "./login.page.form";
import { FormBuilder } from "@angular/forms";


describe('LoginPageForm', () => {
    let loginPageForm: LoginPageForm;
    let form: FormGroup;

    beforeEach(() => {
        loginPageForm = new LoginPageForm(new FormBuilder());
        form = loginPageForm.createForm();
    });

    it('should create login form empty', () => {
        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email')?.value).toEqual("");
        expect(form.get('email')?.valid).toBeFalsy();
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password')?.value).toEqual("");
        expect(form.get('password')?.valid).toBeFalsy();
    });

    it('should have email invalid if email is not valid', () => {
        form.get('email')?.setValue('invalid email');
        expect(form.get('email')?.valid).toBeFalsy();
    });

    it('should have email valid if email is valid', () => {
        form.get('email')?.setValue('valid@email.com');
        expect(form.get('email')?.valid).toBeTruthy();
    } );

    it('should have a valid form if email and password are valid', () => {
        form.get('email')?.setValue('valid@email.com');
        form.get('password')?.setValue('valid password');
        expect(form.valid).toBeTruthy();
    } );


});