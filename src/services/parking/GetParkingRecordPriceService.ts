import prisma from "../../config/database";
import { AppError } from "../../utils/errors";
import GetActivePriceConfigService from "../priceConfig/GetActivePriceConfigService";

interface GetParkingRecordPriceInput {
  id: string;
}

class GetParkingRecordPriceService {
  private getActivePriceConfigService = new GetActivePriceConfigService();

  async execute(input: GetParkingRecordPriceInput) {
    const parkingRecord = await prisma.parkingRecord.findUnique({
      where: {
        id: input.id,
      },
    });

    if (!parkingRecord) {
      throw new AppError("Recurso não encontrado", 404);
    }

    const activePriceConfig = await this.getActivePriceConfigService.execute();

    /*
      - Comparar a hora de entrada com a atual
      - Pegar a quantidade de horas total de permanência
      - Pegar os valores configurados de preço
      - Calcular valor da primeira hora -> total de horas menos 1
      - Calcula o valor das horas adicionais
      - Soma os dois valores
    */

    const now = new Date();
    const durationMs = now.getTime() - parkingRecord.createdAt.getTime();
    const hourMs = 60 * 60 * 1000;
    const totalHours = Math.max(1, Math.ceil(durationMs / hourMs));

    const firstHourPrice = activePriceConfig.firstHourPrice;
    const additionalHourPrice = activePriceConfig.additionalHourPrice;

    const additionalHours = Math.max(0, totalHours - 1);
    const totalValue = firstHourPrice.plus(
      additionalHourPrice.times(additionalHours),
    );

    return { totalValue };
  }
}

export default GetParkingRecordPriceService;
