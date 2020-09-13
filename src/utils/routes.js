module.exports = [
   {
      label: 'Registros',
      icon: 'fas fa-chart-line',
      items: [
         {
            label: 'Dashboard',
            icon: '',
            command: () => { window.location = "/dashboard" }
         },
      ]
   },
   {
      label: 'Meu Portal',
      icon: 'fas fa-chart-line',
      items: [
         {
            label: 'Notas e Faltas',
            icon: '',
            command: () => { window.location = "/portal/notas" }
         },
         {
            label: 'Meus compromissos',
            icon: '',
            command: () => { window.location = "/portal/compromissos" }
         },
         {
            label: 'Minhas atividades',
            icon: '',
            command: () => { window.location = "/portal/atividades" }
         },
      ]
   },
   /*
   {
      label: 'Tarefas',
      icon: 'fas fa-tasks',
      items: [
         {
            label: 'Em fila',
            icon: '',
            command: () => { window.location = "/tarefas" }
         },
         {
            label: 'Nova tarefa',
            icon: ''
         },
         {
            label: 'Controle',
            icon: ''
         }

      ]
   },
   {
      label: 'Trade bot',
      icon: 'fas fa-hand-holding-usd',
      items: [
         {
            label: 'Conta',
            icon: '',
            command: () => { window.location = "/trade/account" }
         },
      ]
   },*/
];