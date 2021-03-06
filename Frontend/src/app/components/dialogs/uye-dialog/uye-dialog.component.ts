import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Uye } from 'src/app/models/Uye';

@Component({
  selector: 'app-uye-dialog',
  templateUrl: './uye-dialog.component.html',
  styleUrls: ['./uye-dialog.component.scss'],
})
export class UyeDialogComponent implements OnInit {

  dialogBaslik: string;
  yeniKayit: Uye;
  islem: string;
  frm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UyeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public frmBuild: FormBuilder,

  ) {
    this.islem = data.islem;
    this.yeniKayit = data.kayit;

    if (this.islem == 'ekle') {
      this.dialogBaslik = 'Üye Ekle';
    }
    if (this.islem == 'duzenle') {
      this.dialogBaslik = 'Üye Düzenle';
    }

    this.frm=this.FormOlustur();

  }

  ngOnInit() {


  }

  FormOlustur() {
    return this.frmBuild.group({
      UyeId: [this.yeniKayit.UyeId],
      UyeAdi: [this.yeniKayit.UyeAdi],
      UyeSoyadi: [this.yeniKayit.UyeSoyadi],
      UyeKA: [this.yeniKayit.UyeKA],
      UyeKS: [this.yeniKayit.UyeKS],
      UyeTel: [this.yeniKayit.UyeTel],
      UyeMail: [this.yeniKayit.UyeMail],
      UyeAdres: [this.yeniKayit.UyeAdres],
      UyeYetki: [this.yeniKayit.UyeYetki],
    });
  }


}
