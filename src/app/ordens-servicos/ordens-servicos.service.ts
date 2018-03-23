import { Injectable } from '@angular/core';
import { OrdemServicoItem } from './model/OrdemServicoItem';


@Injectable()
export class OrdensServicosService {

  constructor() { }


    // Grupo de Fases Padrao
    getGrupoItensOrdemServico(): OrdemServicoItem[] {
        return [
            { 
              id: 1,
              origemTipo: 'SER',
              origemID: 1,
              servicoId: 1,
              grupoFasesPadraoId: 1,
              quantidade: 4,
              status: 'ABERTO'
           },
            { 
              id: 2,
              origemTipo: 'SER',
              origemID: 1,
              servicoId: 2,
              grupoFasesPadraoId: 2,
              quantidade: 2.5,
              status: 'ABERTO'
           }  
        ];
    }

}


