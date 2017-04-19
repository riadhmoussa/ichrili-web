import { Component,  NgZone, Inject, EventEmitter, Input } from '@angular/core';
import { NgUploaderOptions, UploadedFile, UploadRejected } from 'ngx-uploader';


const user_id: string = JSON.parse(localStorage.getItem('currentUser'))._id;

@Component({
  selector: 'app-upload-avatar',
  templateUrl: './upload-avatar.component.html',
  styleUrls: ['./upload-avatar.component.css']
})
export class UploadAvatarComponent  {
 @Input() private options: NgUploaderOptions;
  response: any;
  sizeLimit: number = 5000000; // 1MB
  previewData: any;
  errorMessage: string;
  inputUploadEvents: EventEmitter<string>;

  constructor(@Inject(NgZone) private zone: NgZone) {
    this.options = new NgUploaderOptions({
      url: 'http://localhost:4000/avatar/upload',
      filterExtensions: true,
      allowedExtensions: ['jpg', 'png', 'jpeg'],
      maxSize: 2097152,
      data: { userId: user_id },
      autoUpload: false,
      fieldName: 'avatar',
      fieldReset: true,
      maxUploads: 2,
      method: 'POST',
      previewUrl: true,
      withCredentials: false
    });
    this.inputUploadEvents = new EventEmitter<string>();
  }

  startUpload() {
    this.inputUploadEvents.emit('startUpload');
  }

  beforeUpload(uploadingFile: UploadedFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      this.errorMessage = 'File is too large!';
    }
  }

  handleUpload(data: any) {
    setTimeout(() => {
      this.zone.run(() => {
        this.response = data;
        if (data && data.response) {
          this.response = JSON.parse(data.response);
        }
      });
    });
  }

  handlePreviewData(data: any) {
    this.previewData = data;
  }

}
