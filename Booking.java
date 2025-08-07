@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long doctorId;
    private String patientName;
    private String contact;
    private String appointmentDate;
    private String appointmentTime;

    // Getters and setters
}