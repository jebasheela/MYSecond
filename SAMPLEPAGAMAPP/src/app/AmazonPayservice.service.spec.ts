import { AmazonPayserviceService } from "./AmazonPayservice.service";
import { TestBed } from "@angular/core/testing";

describe("AmazonPayserviceService", () => {

  let service: AmazonPayserviceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AmazonPayserviceService
      ]
    });
    service = TestBed.get(AmazonPayserviceService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
