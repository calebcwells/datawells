namespace DataWells.Models
{
    public class Skill
    {
        public string Type { get; set; }
        public string Image { get; set; }
        public string Title { get; set; }
        public string FullUrl { get; set; }
        public string FriendlyUrl { get; set; }

        public Skill(string type, string image, string title, string fullUrl, string friendlyUrl)
        {
            Type = type;
            Image = image;
            Title = title;
            FullUrl = fullUrl;
            FriendlyUrl = friendlyUrl;
        }
    }
}