describe('renders shogi players and navigates to kishiDatabase', () => {
  it('passes', () => {
    cy.visit('/')
    
    // 外部サイトに遷移しないように
    cy.intercept('https://www.shogi.or.jp//player/pro/**', 'success')
    cy.get('[data-e2e-player-id="豊島将之九段"]').click()
  })
})
