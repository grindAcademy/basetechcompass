PRISMA
pnpm dlx prisma db push - sync database
pnpm dlx prisma studio - otvara lokalnu prezentaciju prisma database

STRIPE
lokalno pokretanje:
stripe login
uzmi web hook kod - stavi u env
stripe listen --forward-to localhost:3000/api/webhook/stripe
uzmi iz konzole seceret key i kopiraj ga u env kao STRIPE_WEBHOOK_SECRET
mora biti test mode odabran, znaci ne tvoj racun nego neki New business, i od njega keyeve, svi customeri i prozivodi moraju biti kreirani tamo

