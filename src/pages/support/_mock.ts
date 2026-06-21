import type {
  FAQResponse,
  TicketResponse,
  TicketDetailResponse,
} from '@/api/support/support';

// ==================== FAQ Mock ====================

export const faqMock: FAQResponse[] = [
  {
    id: '401b304f-451d-49fb-9065-f6484649a48f',
    question: 'چطور در یک لابی ثبت‌نام کنم؟',
    answer:
      'برای ثبت‌نام در لابی، وارد صفحه لابی موردنظر شوید و روی دکمه ثبت‌نام بزنید. در صورتی که لابی نیاز به هزینه ورودی داشته باشد، مبلغ از کیف پول شما کسر خواهد شد.',
    category: 'لابی‌ها',
    order: 1,
    is_active: true,
    created_at: '2026-06-01T08:00:00Z',
    updated_at: '2026-06-01T08:00:00Z',
  },
  {
    id: 'c559460a-f804-4a3a-9ec8-3c135ee14598',
    question: 'چه زمانی می‌توانم از لابی انصراف دهم؟',
    answer:
      'تا زمانی که وضعیت لابی «در حال ثبت‌نام» باشد، می‌توانید از طریق صفحه لابی انصراف دهید و مبلغ ورودی به کیف پول شما بازگردانده می‌شود.',
    category: 'لابی‌ها',
    order: 2,
    is_active: true,
    created_at: '2026-06-01T08:00:00Z',
    updated_at: '2026-06-01T08:00:00Z',
  },
  {
    id: 'da61750f-c6ca-403c-b283-c6be56c3ea10',
    question: 'چطور می‌توانم در کیف پولم شارژ کنم؟',
    answer:
      'برای شارژ کیف پول، ابتدا یک کارت بانکی معتبر ثبت کنید، سپس از بخش کیف پول گزینه واریز را انتخاب کرده و مبلغ موردنظر را وارد کنید.',
    category: 'کیف پول',
    order: 1,
    is_active: true,
    created_at: '2026-06-02T08:00:00Z',
    updated_at: '2026-06-02T08:00:00Z',
  },
  {
    id: '9a743865-9110-433d-af6e-2f980ce55952',
    question: 'برداشت وجه چقدر زمان می‌برد؟',
    answer:
      'درخواست‌های برداشت معمولاً ظرف ۲۴ تا ۷۲ ساعت کاری بررسی و به کارت بانکی ثبت‌شده شما واریز می‌شوند.',
    category: 'کیف پول',
    order: 2,
    is_active: true,
    created_at: '2026-06-02T08:00:00Z',
    updated_at: '2026-06-02T08:00:00Z',
  },
  {
    id: 'e40df1b7-c97e-4816-a8e8-d4295f3113f1',
    question: 'چطور تیم بسازم و دوستانم را دعوت کنم؟',
    answer:
      'از بخش تیم‌ها می‌توانید یک تیم جدید بسازید و با استفاده از شماره موبایل یا نام کاربری، اعضای جدید را دعوت کنید.',
    category: 'تیم‌ها',
    order: 1,
    is_active: true,
    created_at: '2026-06-03T08:00:00Z',
    updated_at: '2026-06-03T08:00:00Z',
  },
];

// ==================== Tickets Mock (one per status) ====================

export const ticketsMock: TicketResponse[] = [
  {
    id: 'a69dfc92-a96e-4cf3-bccf-16beaa97e720',
    title: 'مشکل در واریز وجه',
    description: 'مبلغی که واریز کردم به کیف پولم اضافه نشده است.',
    attachment_url: null,
    status: 'open',
    priority: 'high',
    user_id: '9b5f857f-489d-4e92-8ca4-171e8f6f2779',
    admin_id: null,
    lobby_id: null,
    created_at: '2026-06-18T10:00:00Z',
    updated_at: '2026-06-18T10:00:00Z',
    closed_at: null,
  },
  {
    id: '90350a35-07f2-42b9-b1cc-adde8945bbd5',
    title: 'سوال درباره لابی رزرو شده',
    description: 'لابی‌ای که ثبت‌نام کردم بیش از حد معمول در وضعیت ثبت‌نام مانده.',
    attachment_url: null,
    status: 'in_progress',
    priority: 'medium',
    user_id: '9b5f857f-489d-4e92-8ca4-171e8f6f2779',
    admin_id: 'c559460a-f804-4a3a-9ec8-3c135ee14598',
    lobby_id: null,
    created_at: '2026-06-15T09:30:00Z',
    updated_at: '2026-06-19T11:00:00Z',
    closed_at: null,
  },
  {
    id: '401b304f-451d-49fb-9065-f6484649a48f',
    title: 'درخواست تغییر نام کاربری',
    description: 'لطفا نام کاربری من را تغییر دهید چون اشتباه ثبت شده است.',
    attachment_url: null,
    status: 'closed',
    priority: 'low',
    user_id: '9b5f857f-489d-4e92-8ca4-171e8f6f2779',
    admin_id: 'c559460a-f804-4a3a-9ec8-3c135ee14598',
    lobby_id: null,
    created_at: '2026-06-10T08:00:00Z',
    updated_at: '2026-06-12T08:00:00Z',
    closed_at: '2026-06-12T08:00:00Z',
  },
];

// ==================== Ticket Detail Mock (with messages) ====================

export const ticketDetailMock: TicketDetailResponse = {
  ...ticketsMock[1],
  messages: [
    {
      id: 'da61750f-c6ca-403c-b283-c6be56c3ea10',
      ticket_id: ticketsMock[1].id,
      user_id: ticketsMock[1].user_id,
      message: 'لابی‌ای که ثبت‌نام کردم بیش از حد معمول در وضعیت ثبت‌نام مانده.',
      attachment_url: null,
      is_from_admin: false,
      created_at: '2026-06-15T09:30:00Z',
    },
    {
      id: '9a743865-9110-433d-af6e-2f980ce55952',
      ticket_id: ticketsMock[1].id,
      user_id: 'c559460a-f804-4a3a-9ec8-3c135ee14598',
      message: 'سلام، در حال بررسی موضوع هستیم و به‌زودی نتیجه را اطلاع می‌دهیم.',
      attachment_url: null,
      is_from_admin: true,
      created_at: '2026-06-19T11:00:00Z',
    },
  ],
};
