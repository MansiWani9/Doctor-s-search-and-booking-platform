@Entity
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String specialization;
    private String location;
    private int experience;
    private int consultationFee;
    private int rating; // percentage like 97
    private int patientStories;

    // Getters and setters
}
