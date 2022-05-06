import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductModel } from 'src/app/core/models/product.model';
import { ModalService } from 'src/app/shared/services/modal-service/modal.service';


@Component({
  selector: 'app-form-product-type',
  templateUrl: './form-product-type.component.html',
  styleUrls: ['./form-product-type.component.css']
})
export class FormProductTypeComponent implements OnInit{
  @Output() saveEmit = new EventEmitter<ProductModel>();
  form: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly modelService: ModalService
  ) {}
  ngOnInit(): void {
    this.createForm();
  }
  createForm(): void {
    this.form = this.fb.group({
      productId: ['', [Validators.required, Validators.maxLength(10)]],
      typeOfProduct: [undefined, [Validators.required]],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      price: [0, [Validators.required, Validators.maxLength(10)]],
    });
  }

  onClickSave(): void {
    if (this.form.valid) {
      this.saveEmit.emit(this.form.value);
      console.log(this.form);

    } else {
      this.modelService.showModal('Invalid form', 'Check the form', 'Error');
    }
  }
}
