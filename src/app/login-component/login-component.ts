import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth-service';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./login-component.css'],
  templateUrl: './login-component.html',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isLogin = true;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  authForm: FormGroup = this.fb.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.errorMessage = '';
    this.successMessage = '';
    this.authForm.reset();

    const nameControl = this.authForm.get('name');
    if (!this.isLogin) {
      nameControl?.setValidators([Validators.required]);
    } else {
      nameControl?.clearValidators();
    }
    nameControl?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.authForm.invalid) return;

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const payload = this.authForm.value;
    const request$ = this.isLogin
      ? this.authService.login(payload)
      : this.authService.register(payload);

    request$.subscribe({
      next: (res) => {
        this.isLoading = false;
        this.successMessage = this.isLogin
          ? 'Login successful!'
          : 'Account successfully registered and saved!';
        // Persist a simple login flag (replace with real token handling)
        localStorage.setItem('isLoggedIn', 'true');
        console.log('Backend response:', res);
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        this.router.navigateByUrl(returnUrl);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message || 'An error occurred. Please try again.';
      },
    });
  }
}
