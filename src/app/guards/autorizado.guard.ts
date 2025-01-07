import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AutorizacaoService } from '../services/autorizacao.service'; // Ajuste o caminho para o seu serviço

export const autorizadoGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Injetar o serviço de roteamento
  const autorizadoService = inject(AutorizacaoService); // Injetar o serviço de autorização

  const usuarioEstaLogado = autorizadoService.obterLoginStatus(); // Chamar o método do serviço

  if (usuarioEstaLogado) {
    return true;
  }

  router.navigate(["/login"]); // Redirecionar para login
  return false;
};
