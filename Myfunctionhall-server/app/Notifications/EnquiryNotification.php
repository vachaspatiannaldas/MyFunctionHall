<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;



class EnquiryNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail($notifiable)
{
    // Customize your email message here
    return (new MailMessage)
        ->line(' Thank you for your Enquiry about our function hall.
         We appreciate your interest. Our team is actively working to provide you with the information you need.
           We\'ll get back to you promptly with details on availability,
           If you have further questions, please feel free to reach out.
            Thanks again for considering us ✔😊')
        ->line('
            Best regards,
            From Function Hall
        ');
}

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
